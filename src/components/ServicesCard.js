const ServicesCard = (props) => {
  return (
    <div className="services-card p-6 sm:min-h-[100%] sm:h-80 min-w-[90%] sm:min-w-[70%] md:min-w-[60%] lg:min-w-[48%] xl:min-w-[38%] min-h-fit border rounded drop-shadow-md flex justify-center items-center flex-col basis-3" id={props.id}>
      <div className="h-full flex flex-col w-full">
        <h1 className="h-[30%] text-lg sm:text-xl font-medium w-full inline-block mb-3 flex items-center">
          {props.title}
        </h1>
        <h1 className=" h-[55%] w-full">{props.des}</h1>
      </div>
    </div>
  );
};

export default ServicesCard;
