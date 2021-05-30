import React, { Component } from "react";
import { Link } from 'react-router-dom'
import $ from 'jquery'

class GetData extends Component {
    state = {
        loading: true,
        people: null,
        searchList: null,
    };

    keyUpHandler = (e) => {
        let newList = []
        this.state.people.forEach(person => {
            let normalize = person.name.toLowerCase();
            let phrase = e.target.value.toLowerCase();
            if(normalize.includes(phrase)) {
                newList.push(person);
                console.log(person.id + ' ' + person.name + ' added!')
            }
        })
        this.setState({searchList: newList})
    }

    searchKey = (e) => {
        e.preventDefault();
        let newList = []
        this.state.people.forEach(person => {
            let normalize = person.name.toLowerCase();
            let phrase = e.target.value.toLowerCase();
            if(normalize.includes(phrase)) {
                newList.push(person);
                console.log(person.id + ' ' + person.name + ' added!')
            }
        })
        this.setState({searchList: newList})
    }

    cardClick = (person, e) => {
        console.log(person.name);
        <Link
            to={{
                pathname: "/user",
                state: person
            }}
        ></Link>
    }

    sortByName = (e) => {
        e.preventDefault();
        let newList = this.state.searchList.reverse();
        newList = newList.sort(
            (a, b) => {
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0;
            });
        this.setState({searchList: newList})
    }

    sortByCompany = (e) => {
        e.preventDefault();
        let newList = this.state.searchList.reverse();        
        newList = newList.sort(
            (a, b) => {
                if(a.company.name > b.company.name) return 1;
                if(a.company.name < b.company.name) return -1;
                return 0;
            });
        this.setState({searchList: newList})
    }

    sortByCity = (e) => {
        e.preventDefault();
        let newList = this.state.searchList.reverse();
        newList = newList.sort(
            (a, b) => {
                if(a.address.city > b.address.city) return 1;
                if(a.address.city < b.address.city) return -1;
                return 0;
            });
        this.setState({searchList: newList})
    }

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data, loading: false , searchList: data});

    $(".loader").delay(300).fadeOut();
    $(".animationload").delay(600).fadeOut("slow");
  }

  render() {
    if (this.state.loading) {
      return <>loading...</>;
    }

    if (!this.state.people) {
      return <>Didn't get any results from the server!</>;
    }

    const images = [
        'https://randomuser.me/api/portraits/women/71.jpg',
        'https://randomuser.me/api/portraits/women/11.jpg',
        'https://randomuser.me/api/portraits/women/15.jpg',
        'https://randomuser.me/api/portraits/women/19.jpg',
        'https://randomuser.me/api/portraits/women/18.jpg',
        'https://randomuser.me/api/portraits/men/11.jpg',
        'https://randomuser.me/api/portraits/men/15.jpg',
        'https://randomuser.me/api/portraits/men/33.jpg',
        'https://randomuser.me/api/portraits/men/18.jpg',
        'https://randomuser.me/api/portraits/men/20.jpg'
    ]

    return (
      <>

        <Loading />
        
        <section id="people">
        <div className="container">
            
            <div className="row people_list">
            <div className="col-md-12">
                <h3 className="title text-center">List of people</h3>
                <div className="titleHR"><span></span></div>

            </div>
            </div>

            <div  className="row">

                <div className="col-md-6">
                    <div className="navbar sort" id="sort">
                        <ul className="nav navbar-nav navbar-left">
                            <li onClick={this.sortByName}><a href="#">Sort by name</a></li>
                            <li onClick={this.sortByCompany}><a href="#">Sort by company</a></li>
                            <li onClick={this.sortByCity}><a href="#">Sort by city</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6">
                    <nav className="navbar navbar-light bg-light searchbox">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2 search_input" type="search" placeholder="Search" aria-label="Search" name="search" 
                            onKeyUp={this.keyUpHandler}                            
                            />
                            <button className="btn btn-outline-success my-2 my-sm-0 search_button" type="submit"
                            onClick={this.searchKey}   
                            >Search</button>
                        </form>
                    </nav>
                </div>

            </div>
            
            {this.state.searchList.map((person, index) => {
                return(
                    <Link
                    key={index}
                    to={{
                        pathname: "/user",
                        state: {user: person}
                    }}
                    >
                    <div className="col-sm-6" value={person} key={index}> 
                        <div className="card">
                            <div className="text-center services-item">
                            <div className="col-wrapper">
                                <div className="icon-border"> 
                                {/* <i  className={icons[index]}></i>  */}
                                <img src={images[person.id-1]} alt="person" />
                                </div>
                                <h5>{person.name}</h5>
                                <p className="company_name">
                                    <span className="company">Company: </span>
                                    {person.company.name}
                                    <br/>
                                    <span className="city">City: </span>
                                    {person.address.city}
                                    <br/>
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                )
            })}

        </div>
        </section>
      </>
    );
  }
}

function Loading() {        
    return (
        <>
        <div className="animationload">
        <div className="loader">
            Please Wait....
        </div>
        </div> 
        </>
    );
}

export default GetData;
