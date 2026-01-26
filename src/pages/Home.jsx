import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { useExperiment } from "statsig-react";
import { EXPERIMENT_PROMO_BANNER } from "../services/statsig";

const Home = () => {


  // const [state, dispatch] = useReducer((state, action) => {
  //   switch (action.type) {
  //     case "Set_Name":
  //       return { ...state, name: action.payload }

  //     case "Add_Name":
  //       return { ...state, names: [...state.names, state.name], name:"" }

  //   }
  // }, {
  //   names: [],
  //   name: ""
  // })

  // const [state, dispatch] = useReducer((state, action) => ({
  //   ...state,
  //   ...action
  // })
  //   , {
  //     first: "",
  //     last: ""
  //   })





  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();

  // Statsig Experiment: Promo Banner
  const { config } = useExperiment(EXPERIMENT_PROMO_BANNER);
  const showBanner = config.get("enabled", false);
  const bannerText = config.get("text", "Special Promo: 20% OFF!");

  return (
    <Fragment>
      {showBanner && (
        <div style={{ backgroundColor: "#ff4757", color: "white", textAlign: "center", padding: "10px", fontWeight: "bold" }}>
          {bannerText}
        </div>
      )}

      <div>
        hello
      </div>
      <SliderHome />
      <Wrapper />

      {/* <div>
        <input type="text "
          value={state.name}
          onChange={e => dispatch({ type: "Set_Name", payload: e.target.value })} />
      </div>

      <div>
        Name = {state.name}
      </div>


      <div>
        {state.names.map((item,index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </div>

      <div>
        <button onClick={()=> dispatch({type:"Add_Name"})}>
          Add Name
        </button>
      </div> */}


      {/* <input type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })} />


      <input type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />


      <div>
        First:{state.first}

      </div>

      <div>
        Last:{state.last}

      </div> */}

      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;
