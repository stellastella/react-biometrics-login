// import logo from './logo.svg';
import './App.css';
import { AuthProvider, useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'

function App() {
  return (
    <div className="App">
      {/* The code below includes your Project ID (P2Oa3wPJ3Wz1PMEXpYxJVhV6OR5E) */}
          <AuthProvider projectId="P2Oa3wPJ3Wz1PMEXpYxJVhV6OR5E">
            <Descope
              flowId="sign-up-or-in"
              theme="light"
              onSuccess={(e) => {
                console.log(e.detail.user.name)
                console.log(e.detail.user.email)
              }}
              onError={(err) => {
                console.log("Error!", err)
              }}
            />
          </AuthProvider>
    </div>
  );
}
export default App;
