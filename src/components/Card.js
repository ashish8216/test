import React from 'react'

function Card(props) {
    return (
        <div>
            <div class="container">
        <div class="col-md-4">
        <div class="card">
  <img src={props.imagename} class="card-img-top" alt={props.title} style={{width:'100px'}} />
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    
  </div>
</div>
  </div>
  </div>
  </div>
    )
}

export default Card