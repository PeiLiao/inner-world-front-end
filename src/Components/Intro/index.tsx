import * as React from "react";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

class Intro extends React.Component<any, any> {
	render() {
		return (
			<Typography>
				<Title>Introduction</Title>
				<Paragraph>
					In the process of internal desktop applications development, many
					different design specs and implementations would be involved, which
					might cause designers and developers difficulties and duplication and
					reduce the efficiency of development.
				</Paragraph>
			</Typography>
		);
	}
}

export default Intro;
