import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getDatabase , onValue, ref , remove, set, update} from "firebase/database";

export interface PeriodicElement {
  name: string;
  age: number;
  score: number;
  winner_flag: boolean;
  id:string;
}
@Injectable({
  providedIn: 'root'
})
export class DataInteractionService {
  
  userDataArray: PeriodicElement[] = [];
  currentWinner!: PeriodicElement;
  constructor(
    public router:Router
  ) { }

    fireBaseConfig = {
      databaseURL: "https://assignment-1-5acce-default-rtdb.firebaseio.com/",
    }
 app = initializeApp(this.fireBaseConfig);

 db = getDatabase(this.app);

   getUserData = async () =>{
     this.userDataArray = []
    let tempArray:any[]=[]
   const reference = ref(this.db, 'user')
   let data:any = await new Promise(resolve =>{
    onValue(reference, (data)=>{
      let inputData = data.val()
      resolve(inputData)
     });
   })   
   Object.keys(data).find(k =>{
    data[k].id = k
    tempArray.push(data[k])
   })
   this.userDataArray = tempArray
   return this.userDataArray;
  } 

  setcurrentWinner = (currentWinner:PeriodicElement)=>{
    this.currentWinner = currentWinner
  }
  updateWinner = ()=>{
    update(ref(this.db, `user/${this.currentWinner.id}`),{
      winner_flag : !this.currentWinner.winner_flag
    }).then(data =>console.log("data sent")).catch(err=>{
      console.log(err)
    })
    location.reload()
  }


  AddApiCall = (data:any)=>{
    let uniqueId = data.email.split(".")
    set(ref(this.db, 'user/'+ uniqueId[0] ), {
      name : data.name,
      age: data.age,
      score: data.score,
      winner_flge: false
    }).then(()=>{
      console.log("Data Added SucessFully")
      this.router.navigateByUrl("/user")
    }).catch((err)=>{
      console.log(err)
    })
  
  }

  deleteApiCall=  async (element:PeriodicElement)=>{
    await remove(ref(this.db, `user/${element.id}`)).then(()=>{
      console.log("data Deleted Succefully")
    })
    setTimeout(()=>{
      location.reload()
    },1000)
    }

   
  
}
