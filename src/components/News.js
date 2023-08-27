import React, { Component } from "react";
import NewsItem from "./NewsItem";
import propTypes from 'prop-types';
export default class News extends Component {


static defaultProps={
  country:'in',
  pageSize:8,
  category:'general',
}
static propTypes={
  country: propTypes.string,
  pageSize: propTypes.number,
  category:propTypes.string,
}
  constructor() {
    super();
    console.log("Hello i am a constructor");
    this.state = {
      articles: [],
      loading: false
    };
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d8bb634c703d4b63b6fa9aad6943ce76&page=17pageSize=20`;
    let data = await fetch(url);
    let parseData=await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles,totalResults:parseData.totalResults});
  }


handlePre = async() =>{
console.log("previous");

if(this.state.page-1<Math.ceil(this.state.totalResults/20)){}
else{
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=$(this.props.category}&apiKey=d8bb634c703d4b63b6fa9aad6943ce76&page=${this.state.page-1}&pageSize=20`;
  let data = await fetch(url);
  let parseData=await data.json()
  console.log(parseData);
  this.setState({articles: parseData.articles});
this.setState({
  page: this.state-1,
})
}
}
handleNext = async() =>{
  console.log("Next");
if(this.state.page+1>Math.ceil(this.state.totalResults/20)){}
else{
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=$(this.props.category}&apiKey=d8bb634c703d4b63b6fa9aad6943ce76&page=${this.state.page+1}&pageSize=20`;
  let data = await fetch(url);
  let parseData=await data.json()
  console.log(parseData);
  this.setState({articles: parseData.articles});
this.setState({
  page: this.state+1,
})
}

}
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">News-90 Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
    return <div className="col-md-3">
    <NewsItem
    key={element.url} 
    title={element.title?element.title.slice(0,20):""}
    description={element.description?element.description.slice(0,80):""}
    imageUrl={element.urlToImage}
    url={element.url}
    />
  </div>
        })}
       
        </div>
        <div className="container">
        <button disabled={this.state.page<=1} type="button" className="btn btn-secondary btn-sm" onClick={this.handlePre}>&larr; Previous </button>
        &nbsp;
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-secondary btn-sm" onClick={this.handleNext}>Next  &rarr;</button>
        </div>
      </div>
    );
  }
}
