import * as React from 'react';
import { Typography } from 'antd';
import { Highlighter } from 'react-highlight-words';
import KeywordContext from '../../../contexts/KeywordContext';
import './style.less';

const { Title } = Typography;
interface IProps {
	id: number;
}

const content = '<h3>In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.</h3>';

const Artical = (props) => {
	const [keyword] = React.useContext(KeywordContext);
	return (
		<Typography>
			<Title>
				This is Content:{props.id},searching:{keyword}
			</Title>
			<Highlighter highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }} searchWords={[keyword]} autoEscape textToHighlight={content} />
		</Typography>
	);
};

export default Artical;
