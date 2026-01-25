const FeatureCard  = ({Icon ,Title ,Desc}) =>{
    return(
        <>
        <div className="border rounded-xl p-6 mb-5 shadow-sm drop-shadow-sm hover:shadow-lg transition-shadow">
                            <Icon className="h-10 w-10 text-slate-700 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{Title}</h3>
                            <p className="text-gray-600">{Desc}</p>
                        </div>
        </>
    );
};
export default FeatureCard;