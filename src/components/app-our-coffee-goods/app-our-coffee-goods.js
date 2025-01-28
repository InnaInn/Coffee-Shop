import React from "react";
import './app-our-coffee-goods.css';
import Item3 from '../../images/item3.jpeg';
import data from "../goods/goods";
import RenderListGoods from "../renderListGoods/renderListGoods";

class AppOurCoffeeGoods extends React.Component {
    state = {
        searchTerm: '',
        filteredData: data,
        selectedFilter: ''
    };

    handleInputChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm) &&
            (this.state.selectedFilter ? item.production.toLowerCase() === this.state.selectedFilter.toLowerCase() : true)
        );
        this.setState({ searchTerm, filteredData });
    };

    handleFilterChange = (filter) => {
        if (this.state.selectedFilter === filter) {
            this.setState({ selectedFilter: '', filteredData: data });
        } else {
            const filteredData = data.filter(item =>
                item.production.toLowerCase() === filter.toLowerCase()
            );
            this.setState({ selectedFilter: filter, filteredData });
        }
    };

    render() {
        return (
            <div>
                <div className="containerGoods">
                    <div className="inputGoods">
                        <label>
                            Looking for
                            <input
                                className="inputContent"
                                type="text"
                                placeholder="start typing here"
                                value={this.state.searchTerm}
                                onChange={this.handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="filterGoods">
                        <div className="textFilter">
                            Or filter
                        </div>
                        <div className="buttonFilter">
                            <button className="coffeeName" onClick={() => this.handleFilterChange('Brazil')}>Brazil</button>
                            <button className="coffeeName" onClick={() => this.handleFilterChange('Kenya')}>Kenya</button>
                            <button className="coffeeName" onClick={() => this.handleFilterChange('Columbia')}>Columbia</button>
                        </div>
                    </div>
                </div>
                <RenderListGoods data={this.state.filteredData} />
            </div>
        );
    }
}

export default AppOurCoffeeGoods;