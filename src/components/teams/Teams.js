import React, { Component } from 'react'
import * as Cards from './Cards'
import { getAllTeams } from '../api_config/api';
import apiURL from '../api_config/ApiConfig';
import Pagination from './Pagination';
import JwPagination from 'jw-react-pagination';
import '../news/home.css'
export default class Teams extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Teams: [],
            pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    componentDidMount() {
        // Mack API call 
        getAllTeams(this.props.Teams)
            .then((response) => {
                this.setState({
                    Teams: response.data
                });
            })
            .catch((error) => {
            })

    }


    render() {
        let allTeams = <h3> قريبا... </h3>
        // if condtion to check the array is greater than zero return and pass the data to ReceivedService components 
        if (this.state.Teams.length > 0) {
            allTeams = this.state.pageOfItems.map((item, index) => {
                return (
                    <div id={item._id}>
                        <Cards.single_card key={index} >
                            <Cards.CardsIcon src={apiURL + item.Logo} />
                            <Cards.CardsH2>{item.data.TeamName}</Cards.CardsH2>
                            <Cards.CardsP>{item.Content}</Cards.CardsP>
                        </Cards.single_card>

                    </div>
                )
            })
        }
        return (
            <div className="highestContainer">
    <Cards.CardsContainer id="Teams">
                                    <Cards.CardsWrapper>
                                    {allTeams}               

                       </Cards.CardsWrapper>
                                </Cards.CardsContainer>
                                <div className="PaginationContainer">
                    <div className="Pagination">
                        <JwPagination items={this.state.Teams} onChangePage={this.onChangePage} pageSize={12}  />
                </div>
                </div>
            </div>
        )
    }
}



