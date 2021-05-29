import React, { Component } from "react";

class GetData extends Component {
    state = {
        loading: true,
        people: null,
        users: null
    };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <>loading...</>;
    }

    if (!this.state.people) {
      return <>Didn't get any results from the server!</>;
    }

    const icons = [
        'icon-arrow-streamline-target color-l-orange',
        'icon-caddie-shopping-streamline color-l-blue',
        'icon-coffee-streamline color-l-yellow',
        'icon-clock-streamline-time color-l-purple',
        'icon-design-graphic-tablet-streamline-tablet color-l-pink',
        'icon-design-pencil-rule-streamline color-l-pink',
        'icon-ink-pen-streamline color-l-green',
        'icon-magic-magic-wand-streamline color-l-orange',
        'icon-settings-streamline-2 color-l-blue',
        'icon-speech-streamline-talk-user color-l-yellow',
        'icon-streamline-umbrella-weather color-l-purple'
    ];

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
                            <li><a href="#home">Sort by name</a></li>
                            <li><a href="#people">Sort by company</a></li>
                            <li><a href="#footer">Sort by city</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6">
                    <nav className="navbar navbar-light bg-light searchbox">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2 search_input" type="search" placeholder="Search" aria-label="Search" name="search" 
                            onKeyUp={ e => (
                                console.log(e.target.value)
                            )}                            
                            />
                            <button className="btn btn-outline-success my-2 my-sm-0 search_button" type="submit">Search</button>
                        </form>
                    </nav>
                </div>

            </div>
            
            {this.state.people.map((person, index) => {
                return(
                    <div className="col-sm-6" key={index}> 
                        <div className="card">
                            <div className="text-center services-item">
                            <div className="col-wrapper">
                                <div className="icon-border"> 
                                {/* <i  className={icons[index]}></i>  */}
                                <img src={images[index]} alt="person" />
                                </div>
                                <h5>{person.name}</h5>
                                <p className="company_name"><span className="company">Company: </span>{person.company.name}<br/></p>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
        </section>
      </>
    );
  }
}

export default GetData;
