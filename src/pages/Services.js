import ServiceList from '../components/ServiceList';


const Service = () => {


    return(
        <div className="service">
          <ServiceList services={services}/>
        </div>
    );
}

export default Service;