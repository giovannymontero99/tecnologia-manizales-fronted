import React, { useEffect,useState } from 'react';
import './Targets.css';

function Targets () {
    const [ products,setProducts ] = useState([]);

    const getData = async()=>{
        const response = await fetch('https://tecnologia-manizales-backend-production.up.railway.app/api/v1');
        const responseJson = await response.json();
        return setProducts( responseJson );
    }

    useEffect(()=>{
        getData();
    }, [] );

    return(
        <ul className='targets-section'>
        { 
          products.map( dataObject => {
            return(
                <li key={ dataObject.id } className='targets-list' >
                    <div className='target'>
                        <div className='target-img' >
                            { dataObject.imgs.map( (imgUrl, index )=> <img key={index} src={imgUrl} alt={dataObject.name}/> ) }
                        </div>
                        <div className='target-carousel'>
                            { dataObject.imgs.map( ( img,index )=> <div key={index}>◻</div>  ) }
                        </div>
                        <div className='target-text'>
                            <div className='target-title'>
                                <h3>{ dataObject.title }</h3>
                            </div>
                            <div className='target-description'>
                                { dataObject.descripcion.map( (descripcion,index )=> <p key={index}>▪ {descripcion}</p> ) }
                            </div>
                            <div className='target-cost'>
                                ${ dataObject.pvp.toFixed(3)   }
                            </div>
                        </div>
                    </div>
                </li>
            )
          }) 
        }
      </ul>
    );
}

export default Targets;