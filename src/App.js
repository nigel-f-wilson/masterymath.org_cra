import logo from './logo.svg';
import './App.css';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
// from fcc tutorial
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
// from amplify 2.0 docs
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(awsconfig);


export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <AmplifySignOut />
//         <h2>My App Content</h2>
//       </header>
//     </div>
//   );
// }

// export default withAuthenticator(App);
