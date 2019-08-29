import * as React from 'react';
import { Typography } from 'antd';
import KeywordContext from '../../../contexts/KeywordContext';
import './style.less';

const { Title } = Typography;
interface IProps {
	id: number;
}

const content = '<h3>In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.</h3>';

const Artical = (props) => {
	const [keyword] = React.useContext(KeywordContext);
	const highlightText = keyword ? content.replace(new RegExp(`(${keyword})`, 'g'), `<span class="highlight">$1</span>`) : content;

	return (
		<Typography>
			<Title>
				This is Content:{props.id},searching:{keyword}
			</Title>{' '}
			<div dangerouslySetInnerHTML={{ __html: highlightText }} />
		</Typography>
	);
};

export default Artical;
