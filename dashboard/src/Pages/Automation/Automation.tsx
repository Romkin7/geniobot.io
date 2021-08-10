import React, { FC, useState, useEffect } from 'react';
import { IAutomation, ITopic, ICategory } from '../../@types';
import Category from '../../Components/Category/Category';
import Topic from '../../Components/Topic/Topic';
import axios from 'axios';
import { AddCircleOutline } from '@material-ui/icons';

const Automation: FC = () => {
	const [categories, setCategories] = useState<ICategory[] | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<ICategory>({ name: 'FAQ', id: 2, questions: [] });
	const [topics, setTopics] = useState<ITopic[] | null>(null);
	const [visibleTopics, setVisibleTopics] = useState<ITopic[] | null>(null);

	useEffect(() => {
		if (!categories && !topics) {
			axios
				.get('https://61126751edccb70eafdb624a--practical-almeida-74b50f.netlify.app/automation.json')
				.then((res: { data: IAutomation }) => {
					const { categories, topics }: IAutomation = res.data;
					setCategories(categories);
					setTopics(topics);
					setVisibleTopics(topics.filter((topic: ITopic) => topic.categories.includes(selectedCategory.name)));
				});
		}
	}, [setCategories, categories, setTopics, topics, setVisibleTopics, selectedCategory]);

	const categoryClickHandler = (name: string) => {
		console.log('clicked ' + name);
		const filteredTopics: ITopic[] = topics?.filter((topic: ITopic) => {
			return topic.categories.includes(name);
		}) as ITopic[];
		setSelectedCategory(selectedCategory);
		setVisibleTopics(filteredTopics);
	};

	const deleteCategoryHandle = (id: number) => {
		console.log('delete this category ' + id);

		setCategories(
			categories?.filter((category: ICategory) => {
				return category.id !== id;
			}) as ICategory[],
		);
		// axios.delete('http://localhost:8080/automation.json', {
		// 	categories: { categoryRemove },
		// });
	};

	return (
		<div className="automation">
			<section className="automation__category-list">
				<h2 className="automation__category-list__button">
					Categories
					<AddCircleOutline style={{ fontSize: 30 }} className="automation__category-list__button__icon" role="button" />
				</h2>
				{categories?.length &&
					categories.map((category: ICategory) => {
						return (
							<Category
								key={category.id}
								category={category}
								categoryClickHandler={categoryClickHandler}
								active={selectedCategory.name === category.name}
								deleteCategoryHandle={deleteCategoryHandle}
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
