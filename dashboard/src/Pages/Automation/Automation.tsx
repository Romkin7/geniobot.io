import React, { FC, useState, useEffect } from 'react';
import { IAutomation, ITopic } from '../../@types';
import Category from '../../Components/Category/Category';
import Topic from '../../Components/Topic/Topic';
import axios from 'axios';
import { AddCircleOutline } from '@material-ui/icons';
import TransitionsModal from '../../Components/Shared/TransitionsModal';

const Automation: FC = () => {
	const [categories, setCategories] = useState<string[] | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<string>('FAQ');
	const [topics, setTopics] = useState<ITopic[] | null>(null);
	const [visibleTopics, setVisibleTopics] = useState<ITopic[] | null>(null);
	const [openModal, setOpenModal] = React.useState<boolean>(false);

	useEffect(() => {
		if (!categories && !topics) {
			axios.get('http://localhost:3001/automation.json').then((res: { data: IAutomation }) => {
				const { categories, topics }: IAutomation = res.data;
				setCategories(categories);
				setTopics(topics);
				setVisibleTopics(topics.filter((topic: ITopic) => topic.categories.includes(selectedCategory)) as ITopic[]);
			});
		}
	}, [setCategories, categories, setTopics, topics, setVisibleTopics, selectedCategory]);

	const categoryClickHandler = (selectedCategory: string) => {
		console.log('clicked ' + selectedCategory);
		const filteredTopics: ITopic[] | undefined = topics?.filter((topic: ITopic) => {
			return topic.categories.includes(selectedCategory);
		});
		setSelectedCategory(selectedCategory);
		setVisibleTopics(filteredTopics as ITopic[]);
	};

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<div className="automation">
			<section className="automation__category-list">
				<h2 className="automation__category-list__button" onClick={handleOpenModal}>
					Categories
					<AddCircleOutline style={{ fontSize: 30 }} className="automation__category-list__button__icon" role="button" />
				</h2>
				{categories?.length &&
					categories.map((category: string) => {
						return (
							<Category
								key={category}
								category={category}
								categoryClickHandler={categoryClickHandler}
								active={selectedCategory === category}
							/>
						);
					})}
			</section>
			<TransitionsModal
				heading=""
				yes="Confirm"
				no="Cancel"
				description="here will come form"
				handleOpenModal={handleOpenModal}
				handleCloseModal={handleCloseModal}
			/>

			<div className="automation__topics-list">
				{visibleTopics?.length && (
					<ul>
						{visibleTopics.map((topic: ITopic) => {
							return <Topic key={topic.id} topic={topic.topic} />;
						})}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Automation;
