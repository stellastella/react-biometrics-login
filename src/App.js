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
                    // created a div upon successful login
                    const box = document.createElement("div");
                    box.id = 'welcome';
                    document.body.appendChild(box);

                    const box2 = document.createElement("div");
                    box2.id = 'summary';
                    document.body.appendChild(box2);

                    // created an h1 and appended to div
                    const h1 = document.createElement('h1');
                    h1.id = 'intro';
                    box.appendChild(h1);

                    const h3 = document.createElement('h3');
                    h3.id = 'summary-text';
                    box.appendChild(h3);

                    const li = document.createElement('ul');
                    li.id = 'option-text';
                    box2.appendChild(li);

                  
                    // converted json Object to string
                    let hi = JSON.stringify(e.detail.user.name)
                    // console.log(hi);

                    // welcome message
                    let greet = "Hi, "+ JSON.parse(hi);
                    document.getElementById("intro").innerHTML = greet;

                    // summary mssg
                    let summaryMssg = "Savings - Basic"
                    let balance = "N80,000"
                   
                    document.getElementById("summary-text").innerHTML = summaryMssg + "</br>" + balance
                    // document.getElementById("options").innerHTML = option
                    
                    // list display
                    let data = ["Transfer","Bills","Loans","Tickets","Piggy", "More"]
                    let list = document.getElementById("option-text");
                    data.forEach((item)=>{
                      let li = document.createElement("li");
                      li.id ="li-id"
                      li.innerText = item;
                      list.appendChild(li);
                    })
 
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
