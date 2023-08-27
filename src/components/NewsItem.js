import React, { Component } from 'react'

export default class NewsItem extends Component {
    
  render() {
  let  {title,description,imageUrl,url} = this.props;
    return (
      <div className='my-4'>
 <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl? "https://timesofindia.indiatimes.com/life-style/health-fitness/diet/deficient-in-vitamin-d-heres-how-eating-mushrooms-might-help/photostory/101984868.cms":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} target='blank' className="btn btn-sm btn-primary">Readmore..</a>
</div>
</div>
      </div>
    )
  }
}
