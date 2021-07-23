import React, { FC, useState, useEffect } from 'react';
import { IAutomation, ITopic } from '../../@types';
import Categories from '../../Components/Main/Automation/Categories';
import Topic from '../../Components/Topic/Topic';
import axios from 'axios';
import { AddCircleOutline } from '@material-ui/icons';

const Automation: FC = () => {
	const [categories, setCategories] = useState<string[] | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<string>('FAQ');
	const [topics, setTopics] = useState<ITopic[] | null>(null);
	const [visibleTopics, setVisibleTopics] = useState<ITopic[] | null>(null);

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

	const handleCategoryClick = (selectedCategory: string) => {
		console.log('clicked ' + selectedCategory);
		const filteredTopics: ITopic[] | undefined = topics?.filter((topic: ITopic) => {
			return topic.categories.includes(selectedCategory);
		});
		setSelectedCategory(selectedCategory);
		setVisibleTopics(filteredTopics as ITopic[]);
	};

	return (
		<div className="automation">
			<section className="automation__category-list">
				<h2 className="automation__category-list__button">
					Categories
					<AddCircleOutline style={{ fontSize: 30 }} className="automation__category-list__button__icon" role="button" />
				</h2>
				{categories?.length &&
					categories.map((category: string) => {
						return (
							<Categories
								key={category}
								category={category}
								click={() => handleCategoryClick(category)}
								active={
									visibleTopics && visibleTopics[0]?.categories[0] === category
										? 'automation__category-list__item__name--active'
										: ''
								}
							/>
						);
					})}
			</section>

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
