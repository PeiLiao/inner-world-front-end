import * as React from 'react';
import { Input } from 'antd';
import { KeywordContext } from '../../contexts/KeywordContext';
import './style.less';
const { Search } = Input;

export const SearchBar = (props) => {
	let [keyword, setKeyWord] = React.useState('');
	return (
		<KeywordContext.Provider value={[keyword, setKeyWord]}>
			<div className="searchBar">
				<Search  className="searchBtn" placeholder="input search text" onSearch={(value) => setKeyWord(value)}  />
				<div>{props.children}</div>
			</div>
		</KeywordContext.Provider>
	);
};

export default SearchBar;
