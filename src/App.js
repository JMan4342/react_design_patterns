// import { SplitScreen } from "./SplitScreen";

// import { LargePersonListItem } from "./people/LargePersonListItem";
// import { SmallPersonListItem } from "./people/SmallPersonListItem";
// import { SmallProductListItem } from "./products/SmallProductListItem";
// import { LargeProductListItem } from "./products/LargeProductListItem";
// import { NumberedList } from "./NumberedList";
// import { RegularList } from "./RegularList";

// import { Modal } from "./Modal";

// import axios from "axios";
// import { CurrentUserLoader } from "./CurrentUserLoader";
// import { UserLoader } from "./UserLoader";
// import { DataSource } from "./DataSource";
// import { ResourceLoader } from "./ResourceLoader";
// import { UserInfo } from "./UserInfo";
// import { ProductInfo } from "./ProductInfo";

// import { useState } from "react";
// import { UncontrolledForm } from "./UncontrolledForm";
// import { ControlledForm } from "./ControlledForm";
// import { UncontrolledModal } from "./UncontrolledModal";
// import { ControlledModal } from "./ControlledModal";

// import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
// import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

// import { printProps } from "./printProps";
// import { withUser } from "./withUser";
// import { UserInfoForm } from "./UserInfoForm";

import { RecursiveComponent } from "./RecursiveComponent";

// *** SPLITSCREEN DEMO ***
// *** SPLITSCREEN DEMO ***

// const LeftHandComponent = () => {
//   return <h1 style={{ backgroundColor: "green" }}>Left!</h1>;
// };

// const RightHandComponent = () => {
//   return <p style={{ backgroundColor: "red" }}>Right!</p>;
// };

// function App() {
//   return (
//     <SplitScreen leftWeight={1} rightWeight={3}>
//       <LeftHandComponent />
//       <RightHandComponent />
//     </SplitScreen>
//   );
// }

// *** LIST AND LISTITEMS DEMO ***
// *** LIST AND LISTITEMS DEMO ***

// const people = [
//   {
//     name: "John Doe",
//     age: 54,
//     hairColor: "brown",
//     hobbies: ["swimming", "bicycling", "video games"],
//   },
//   {
//     name: "Brenda Smith",
//     age: 33,
//     hairColor: "black",
//     hobbies: ["golf", "mathematics"],
//   },
//   {
//     name: "Jane Garcia",
//     age: 27,
//     hairColor: "blonde",
//     hobbies: ["biology", "medicine", "gymnastics"],
//   },
// ];

// const products = [
//   {
//     name: "Flat-Screen TV",
//     price: "$300",
//     description: "Huge LCD screen, a great deal",
//     rating: 4.5,
//   },
//   {
//     name: "Basketball",
//     price: "$10",
//     description: "Just like the pros use",
//     rating: 3.8,
//   },
//   {
//     name: "Running Shoes",
//     price: "$120",
//     description: "State-of-the-art technology for optimum running",
//     rating: 4.2,
//   },
// ];

// function App() {
//   return (
//     <>
//       <RegularList
//         items={people}
//         resourceName="person"
//         itemComponent={SmallPersonListItem}
//       />
//       <NumberedList
//         items={people}
//         resourceName="person"
//         itemComponent={LargePersonListItem}
//       />
//       <RegularList
//         items={products}
//         resourceName="product"
//         itemComponent={SmallProductListItem}
//       />
//       <NumberedList
//         items={products}
//         resourceName="product"
//         itemComponent={LargeProductListItem}
//       />
//     </>
//   );
// }

// ***** MODAL DEMO *****
// ***** MODAL DEMO *****

// function App() {
//   return (
//     <>
//       <Modal>
//         <LargeProductListItem product={products[0]} />
//       </Modal>
//     </>
//   );
// }

// ***** CONTAINER COMPONENTS ******
// ***** CONTAINER COMPONENTS ******

// const getServerData = (url) => async () => {
//   const response = await axios.get(url);
//   return response.data;
// };

// const getLocalStorageData = (key) => () => {
//   return localStorage.getItem(key);
// };

// const Text = ({ message }) => <h1>{message}</h1>;

// function App() {
//   return (
//     <>
//       <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
//         <UserInfo />
//       </DataSource>
//       <DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
//         <Text />
//       </DataSource>
//     </>
//   );
// }

// ******  CONTROLLED AND UNCONTROLLED REACT COMPONENTS  *****
// ******  CONTROLLED AND UNCONTROLLED REACT COMPONENTS  *****

// function App() {
//   const [shouldShowModal, setShouldShowModal] = useState(false);

//   return (
//     <>
//       <ControlledModal
//         shouldShow={shouldShowModal}
//         onRequestClose={() => setShouldShowModal(false)}
//       >
//         <h1>Hello!</h1>
//       </ControlledModal>
//       <button onClick={() => setShouldShowModal(!shouldShowModal)}>
//         {shouldShowModal ? "Hide Modal" : "Show Modal"}
//       </button>
//     </>
//   );
// }

// *****  CONTROLLED AND UNCONTROLLED ONBOARDING FLOW COMPONENTS  *****
// *****  CONTROLLED AND UNCONTROLLED ONBOARDING FLOW COMPONENTS  *****

// const StepOne = ({ goToNext }) => (
//   <>
//     <h1>Step 1</h1>
//     <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
//   </>
// );
// const StepTwo = ({ goToNext }) => (
//   <>
//     <h1>Step 2</h1>
//     <button onClick={() => goToNext({ age: 100 })}>Next</button>
//   </>
// );
// const StepThree = ({ goToNext }) => (
//   <>
//     <h1>Step 3</h1>
//     <p>Congratulations! You qualify for our senior discount</p>
//     <button onClick={() => goToNext({})}>Next</button>
//   </>
// );
// const StepFour = ({ goToNext }) => (
//   <>
//     <h1>Step 4</h1>
//     <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
//   </>
// );

// function App() {
//   const [onboardingData, setOnboardingData] = useState({});
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const onNext = (stepData) => {
//     setOnboardingData({ ...onboardingData, ...stepData });
//     setCurrentIndex(currentIndex + 1);
//   };

//   return (
//     <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
//       <StepOne />
//       <StepTwo />
//       {onboardingData.age >= 62 && <StepThree />}
//       <StepFour />
//     </ControlledOnboardingFlow>
//   );
// }

// *****  HIGHER-ORDER COMPONENTS *****
// *****  HIGHER-ORDER COMPONENTS *****

// const UserInfoWithLoader = withUser(UserInfo, '234');

// function App() {
//   return (
//     <>
//       <UserInfoForm />
//     </>
//   );
// }

// *****  CUSTOM HOOKS  *****
// *****  CUSTOM HOOKS  *****

// function App() {
//   return (
//     <>
//       <UserInfo userId="123" />
//       <ProductInfo productId="1234" />
//     </>
//   );
// }

// ***** FUNCTIONAL PROGRAMMING *****
// ***** FUNCTIONAL PROGRAMMING *****

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "Hi",
      },
      b32: {
        message: "Hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

function App() {
  return (
    <RecursiveComponent data={nestedObject} />
  );
}

export default App;
