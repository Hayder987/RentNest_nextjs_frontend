import { getPropertyById } from "@/app/(publicGroup)/_actions/getPropertyById";
import PropertiesNotFound from "./PropertiesNotFound";
import PropertyDetails from "./PropertyDetails";
import { getMyProfile } from "@/services/getMyProfile";

const PropertyDetailsList = async({id} : {id:string}) => {
    const res = await getPropertyById(id);
    const userData = await getMyProfile();
    
     if (!res.success) {
     return <PropertiesNotFound/>
  }

  return (
    <div>
        <PropertyDetails
        property={res.data}
        userData={userData}
    />
    </div>
  )
}

export default PropertyDetailsList