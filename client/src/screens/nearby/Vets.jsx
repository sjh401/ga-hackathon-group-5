import React from 'react'

const Vets = (props) => {

    let businesses = props.vets.businesses
    return (
        <div>
            <h1>Vets</h1>
            <div>
            {businesses ? businesses.map((business, k) => {
                return(
                    <h1>
                        Veterinarians
                    <div  key={business.phone}>
                        <h2>{business.name}</h2>
                        <p>Distance: {business.distance}</p>
                        <p>{business.location.city}, {business.location.state}, {business.location.zip_code} {business.location.country}</p>
                        <p>{business.location.address1}</p>
                        <p>Phone: {business.phone}</p>
                        <p>Rating: {business.rating}</p>
                    </div>
                    </h1>
                    
                    )
            }): <h1>No Location Found</h1>}
        </div>
        </div>
    )
}

export default Vets
