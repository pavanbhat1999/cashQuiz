import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { from, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deposites } from '../components/deposite-page/deposite';

import { Users } from './log-in/user';
import { htmlPrefilter } from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {

  // ------------------------------------from deposite Page
  d_number: number = 0;   //* d_id  -dP
  redheart: number = 0;   //* redheartcount -dP
  yellowheart: number = 0;//* yelloheartCount -dP
  totalAmount;             //* total amount -dP
  d_type;                   // * payment type -pP
  deposite;
  //-----------------------------------------start Page
  user_details;
  u_id;                     //* u_id  -sP
  u_username;        //!!username for -sp//
  u_email;           //!!email for -sP//       
  email;
  password;
//-------------------languagePage-------------
 cat_id;
 cat_name;

 //-------------questionPage
 type="starter";
  constructor(private http: HttpClient) {}

  // getting details after login 
  getUserDetails() {
    var data = new FormData();
    data.append('email', this.email);

    data.append('password', this.password);

    return this.http
      .post<Users>(
        'https://cors-anywhere.herokuapp.com/https://moneyglobeapp.com/cash_quiz/API//user/login',
        data
      )
      .pipe(map((response) => response.data));
  }
  // putting d_id
  putDeposite(id) {
    console.log('deposite_id=' + id);
    this.d_number = id;
  }
  //getting deposite details for display
  getDeposite(deposite) {
    this.deposite = deposite;
  }
  // login authorization
  getlogin(email, password) {
    this.email = email;
    this.password = password;
    var data = new FormData();
    data.append('email', email);

    data.append('password', password);

    return this.http
      .post<Users>(
        'https://cors-anywhere.herokuapp.com/https://moneyglobeapp.com/cash_quiz/API//user/login',
        data
      )
      .pipe(map((response) => response));
  }
  // depositelist
  getfun() {
    var data = new FormData();

    const headers = { Authorization: 'Basic YWRtaW46MTIzNA==' };
    return this.http
      .post<Deposites>(
        'https://cors-anywhere.herokuapp.com/http://moneyglobeapp.com/cash_quiz/API/deposite/deposite_list',
        data,
        { headers }
      )
      .pipe(map((response) => response.data));
  }
   // depositelist
  getfun_deposite() {
    var data = new FormData();
    const headers = { Authorization: 'Basic YWRtaW46MTIzNA==' };
    return this.http
      .post<Deposites>(
        'https://cors-anywhere.herokuapp.com/http://moneyglobeapp.com/cash_quiz/API/deposite/deposite_list',
        data,
        { headers }
      )
      .pipe(map((response) => response.data));
  }
  //payment_submit
  payment_submit(
    user_id,
    deposite_id,
    amount,
    type,
    status,
    description,
    result,
    check_no,
    check_id
  ) {
    var formdata = new FormData();
    const headers = { Authorization: 'Basic YWRtaW46MTIzNA==' };
    //   data.append("user_id",user_id );

    // data.append("deposite_id", deposite_id);
    // data.append("amount", amount);
    // data.append("type", type);

    // data.append("status", status);
    // data.append("description", description);
    // data.append("result", result);
    // data.append("check_no", check_no);
    // data.append("checkid", check_id);
    // data.append("user_id","6" );

    // data.append("deposite_id", "1");
    // data.append("amount", "1.99");
    // data.append("type", "green-money");

    // data.append("status", "success");
    // data.append("description", "check accepted");
    // data.append("result", "1");
    // data.append("check_no", "12345");
    // data.append("checkid", "1");
    formdata.append('user_id', user_id);
    formdata.append('deposite_id', deposite_id);
    formdata.append('amount', amount);
    formdata.append('type', type);
    formdata.append('status', status);
    formdata.append('description', description);
    formdata.append('result', result);
    formdata.append('check_no', check_no);
    formdata.append('check_id', check_id);
    return this.http
      .post<{ result }>(
        'https://cors-anywhere.herokuapp.com/http://moneyglobeapp.com/cash_quiz/API/payment/payment_submit',
        formdata,
        { headers }
      )
      .pipe(map((response) => response));
  }

// categorylist
getCategoryData()
{
  var data = new FormData();

  const headers = { Authorization: 'Basic YWRtaW46MTIzNA==' };
  return this.http
    .post<Deposites>(
      'https://cors-anywhere.herokuapp.com/http://moneyglobeapp.com/cash_quiz/API/quiz/category_list',
      data,
      { headers }
    )
    .pipe(map((response) => response.data));
}  
// user_test_submit
  user_test_submit(data) {
    const headers = { Authorization: 'Basic YWRtaW46MTIzNA==' };
    
    
    var raw = JSON.stringify({
      category_id: '1',
      user_id: '2',
      payment_history_id: '1',
      round_type: 'starter',
      mcq: [
        {
          mcq_answer_master: [
            {
              answer: 'lion',
              is_red_heart_selected: null,
              is_system_selected: null,
              is_user_selected: null,
              mc_id: 2252,
              mc_is_true_answer: 'wrong',
            },
            {
              answer: 'cheetah',
              is_red_heart_selected: false,
              is_system_selected: false,
              is_user_selected: true,
              mc_id: 2253,
              mc_is_true_answer: 'right',
            },
            {
              answer: 'man',
              is_red_heart_selected: null,
              is_system_selected: null,
              is_user_selected: null,
              mc_id: 2254,
              mc_is_true_answer: 'wrong',
            },
            {
              answer: 'jaguar',
              is_red_heart_selected: null,
              is_system_selected: null,
              is_user_selected: null,
              mc_id: 2255,
              mc_is_true_answer: 'wrong',
            },
          ],
          mq_id: '1',
          mq_question: 'The fastest-running terrestrial animal is',
          mq_time: '10',
          user_select_right_ans: true,
        },
        {
          mcq_answer_master: [
            {
              answer: 'lion',
              is_red_heart_selected: null,
              is_system_selected: null,
              is_user_selected: null,
              mc_id: 2252,
              mc_is_true_answer: 'wrong',
            },
            {
              answer: 'cheetah',
              is_red_heart_selected: false,
              is_system_selected: false,
              is_user_selected: true,
              mc_id: 2253,
              mc_is_true_answer: 'right',
            },
            {
              answer: 'man',
              is_red_heart_selected: null,
              is_system_selected: null,
              is_user_selected: null,
              mc_id: 2254,
              mc_is_true_answer: 'wrong',
            },
            {
              answer: 'jaguar',
              is_red_heart_selected: null,
              is_system_selected: null,
              is_user_selected: null,
              mc_id: 2255,
              mc_is_true_answer: 'wrong',
            },
          ],
          mq_id: '1',
          mq_question: 'The fastest-running terrestrial animal is',
          mq_time: '10',
          user_select_right_ans: true,
        },
        {
          mq_id: '1337',
          mq_question:
            'Which Scientist is associated with the invention of the gas engine?',
          mq_time: '10',
          mq_level: '1',
          mcq_answer_master: [
            {
              mc_id: 5343,
              is_red_heart_selected: null,
              is_system_selected: null,
              is_user_selected: true,
              answer: 'Daymlar',
              mc_is_true_answer: 'right',
            },
            {
              mc_id: 5344,
              is_red_heart_selected: null,
              is_system_selected: null,
              is_user_selected: null,
              answer: 'Bunsen',
              mc_is_true_answer: 'wrong',
            },
            {
              mc_id: 5345,
              answer: 'Compel',
              is_red_heart_selected: null,
              is_system_selected: null,
              is_user_selected: null,
              mc_is_true_answer: 'wrong',
            },
            {
              mc_id: 5346,
              answer: 'Morse',
              is_red_heart_selected: null,
              is_system_selected: null,
              is_user_selected: null,
              mc_is_true_answer: 'wrong',
            },
          ],
          user_select_right_ans: 'true',
        },
      ],
    });

    
    return this.http
      .post(
        'https://cors-anywhere.herokuapp.com/http://moneyglobeapp.com/cash_quiz/API/quiz/quiz_test_submit',
        data,
        { headers }
      )
      .pipe(map((response) => response));
  }
}
