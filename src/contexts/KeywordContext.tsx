import React from 'react';

export const KeywordContext = React.createContext<[string, Function]>([
	'',
	() => null
]);

export default KeywordContext;
