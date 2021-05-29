import React, { Component } from "react";

class GetData extends Component {
  state = {
    loading: true,
    people: null,
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

    return (
      <>
        <div>{this.state.people[0].id}</div>
        <div>{this.state.people[0].name}</div>

        <section id="people">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <h3 className="title text-center">List of people</h3>
                <div className="titleHR"><span></span></div>
            </div>
            </div>
            
            {this.state.people.map((person, index) => {
                let output = ''
                
                if(index % 3 == 0) {
                    output = `<div className="row">`;
                }

                output += `
                    <div className="col-sm-4"> 
                        <div className="text-center services-item">
                        <div className="col-wrapper">
                            <div className="icon-border"> 
                            <i className="icon-design-graphic-tablet-streamline-tablet color-l-orange"></i> 
                            </div>
                            <h5>Creative Ideas</h5>
                            <p>Nulla vitae libero pharetra augue. Etiam porta malesuada magna mollis euismod consectetur sem urdom tempus porttitor.</p>
                        </div>
                        </div>
                    </div>
                `

                if(index % 3 == 2) {
                    output += `</div>`;
                }

                return (<div dangerouslySetInnerHTML={{__html: output}} />);

            })}

        </div>
        </section>
      </>
    );
  }
}

export default GetData;
