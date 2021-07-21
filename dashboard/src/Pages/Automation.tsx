import React, { FC, useState, useEffect } from 'react';
import { IAutomation } from '../@types';
import Categories from '../Components/Main/Automation/Categories';
import Topics from '../Components/Main/Automation/Topics';
import axios from 'axios';
import { AddCircleOutline } from '@material-ui/icons';

const Automation: FC = () => {
	const [automation, setAutomation] = useState<IAutomation[] | null>(null);

	useEffect(() => {
		if (!automation) {
			axios.get('automation.json').then((res: any) => {
				console.log(res.data.automation);
				setAutomation(res.data.automation);
			});
		}
	}, [setAutomation, automation]);

	const allcategories = automation?.map((automation: any) => automation.category);

	const categorylist: string[] = Array.from(new Set(allcategories));
	console.log(categorylist);

	const faqcategorylist: any = automation?.filter((automation) => {
		return automation.category === 'FAQ';
	});

	console.log(faqcategorylist);

	return (
		<div className="automation">
			<section className="automation__category-list">
				<h2 className="automation__category-list__button">
					Categories
					<AddCircleOutline style={{ fontSize: 30 }} className="automation__category-list__button__icon" role="button" />
				</h2>
				{categorylist?.length &&
					categorylist.map((category: string) => {
						return <Categories key={category} category={category} />;
					})}
			</section>
			<div className="automation__topics-list">
				<ul>
					{faqcategorylist?.length &&
						faqcategorylist.map((faq: IAutomation) => {
							return <Topics key={faq.id} topic={faq.topic} />;
						})}
				</ul>
			</div>
		</div>
	);
};

export default Automation;
