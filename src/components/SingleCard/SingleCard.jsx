import React from "react";

const SingleCard = (props) => {
  const { name, image, features, published_in } = props.SingleData;
  return (
    <>
        <div className="card w-full bg-base-100 shadow-2xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{name}</h2>
            <h2 className="font-bold text-xl">Feature</h2>
            {
                features.map((sfeature,index) => {
                    return <div>
                        <ul>
                            <li>{index + 1}.{sfeature}</li>
                        </ul>
                    </div>
                })
            }
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default SingleCard;
