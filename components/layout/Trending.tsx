import { serviceProviders } from "@/data/data";

type Props = {
    grid : string;
}


const Trending = ({ grid }: Props) => {
    return ( 
        <section className={`flex ${grid ? 'flex-wrap' : 'flex-col'} gap-4 justify-self-start`}>
            {
                serviceProviders.map((provider) => (
                    <div key={provider.id} className={`flex md:flex-1/4 flex-1/3 flex-col gap-2 p-4 bg-white rounded-lg`}>
                        <div className={`flex ${grid ? 'flex-col' : ''} items-center gap-4`}>
                            <img src={provider.image} alt={provider.name} className="w-16 h-16 rounded-full" />
                            <div>
                                <h3 className="font-medium">{provider.name}</h3>
                                <p className="text-gray-600">{provider.service}</p>
                            </div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>${provider.price}/hr</span>
                            <span>{provider.location}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>⭐ {provider.rating}</span>
                            <span>{provider.experience} years exp.</span>
                        </div>
                    </div>
                ))
            }
        </section>
     );
}
 
export default Trending;