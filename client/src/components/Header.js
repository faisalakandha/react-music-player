import React from 'react';
import styled from 'styled-components';
import Palette from './palette';

const Content = styled.div`
	position: fixed;
	width: 100%;
	height: 100px;
	background-color: ${Palette('Primary')};
`;

const Title = styled.h2`
	margin: 5px 0 0;
	text-align: center;
`;

const ItunesForm = styled.div`
	display: flex;
	align-items: center;
`;

const Button = styled.button`
	background-color: ${Palette('Secondary')};
	color: ${Palette('White')};
	border-radius: 2em;
	height: 28px;
	:hover {
		cursor: pointer;
		background-color: ${Palette('Secondary', 'dark')};
	}
	:focus {
		outline-color: ${Palette('Secondary')};
	}
`;

const Input = styled.input`
	height: 25px;
	width: 100%;
	margin: 0 1em;
	padding: 0 1em;
	background-color: ${Palette('Primary', 'dark')};
	border-radius: 1em;
	color: ${Palette('White')};
	font-size: 16px;
	::placeholder {
		color: ${Palette('White', 'transparent_50')};
	}
	:focus {
		outline-color: ${Palette('Secondary')};
	}
`;


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
		};
	}

	handleSearchTextChange = event =>
		this.setState({ searchText: event.target.value });


	render() {
		const { startSearch } = this.props;
		const { searchText } = this.state;

		return (
			<Content>
				<Title>React Music Player: Search Songs by Title, Artist, Album etc</Title>
				<br />
				<ItunesForm>
					<Input
						type="text"
						value={searchText}
						placeholder="Search..."
						onChange={this.handleSearchTextChange}
					/>
					<Button onClick={() => startSearch(searchText)}>
						<i className="material-icons">search</i>
					</Button>
				</ItunesForm>
			</Content>
		);
	}
}

export default Header;
