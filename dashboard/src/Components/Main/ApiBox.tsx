import React, { FC, useContext } from 'react';
import { Edit, DeleteOutline, FiberManualRecord } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Fade } from '@material-ui/core';
import Button from '../Button/Button';
import { AppContext } from '../../store/appContext';

interface ApiBoxProps {
	address: string;
	name: string;
	maincolor: string;
}

const ApiBox: FC<ApiBoxProps> = ({ address, name, maincolor }) => {
	const { setModalAction } = useContext(AppContext);

	return (
		<div className="api-list__single-api">
			<div className="api-list__single-api__section-buttons">
				<Button
					type="button"
					variant="api-list__single-api__section-buttons__button"
					handleClick={() => setModalAction({ modalOpen: true, title: `Choose something`, description: '', id: 0 })}
				>
					<Edit style={{ fontSize: 30 }} />
				</Button>
				<Button
					type="button"
					variant="api-list__single-api__section-buttons__button"
					handleClick={() =>
						setModalAction({
							modalOpen: true,
							title: `Do you really want to delete this API:`,
							description: `${address}?`,
							id: 0,
						})
					}
				>
					<DeleteOutline style={{ fontSize: 30 }} />
				</Button>
			</div>

			<ul className="api-list__single-api__list">
				<span className={`api-list__single-api__address ${maincolor}`}>{address}</span>
				<li className="api-list__single-api__list__item">
					<FiberManualRecord className={`api-list__single-api__address__icon ${maincolor}  `} style={{ fontSize: 20 }} />
					{name}
				</li>
				<li className="api-list__single-api__list__item">
					<FiberManualRecord className={`api-list__single-api__address__icon ${maincolor}  `} style={{ fontSize: 20 }} />
					agreement number
				</li>
				<li className="api-list__single-api__list__item">
					<FiberManualRecord className={`api-list__single-api__address__icon ${maincolor}  `} style={{ fontSize: 20 }} />
					unpaid invoices
				</li>
			</ul>
		</div>
	);
};

export default ApiBox;
