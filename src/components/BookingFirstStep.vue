<template>
	<div class=".container-fluid" id="first_step">
		<div class="col-6" id="phone_number_form">
			<form v-on:submit.prevent="">
			    <div class="form-group">
			        <input type="phone" class="form-control" id="input_phone_number" placeholder="* Nhập Số Điện Thoại" v-model="phoneNumber">
			    </div>
			    <button id="go_next_step" type="submit" class="btn btn-primary" v-on:click="navigateToBookingSecondStepPage">Đặt lịch giữ chỗ</button>
			    <button id="check_booked" type="submit" class="btn btn-primary" v-on:click="navigateToBookedPage">Xem lại đặt chỗ</button>
			</form>
		</div>
	</div>
</template>

<style scoped>
#first_step {
	background-image: url('~@/assets/background_first_step.jpg');
	height: 100vh;
	overflow: auto;
}

#phone_number_form {
	margin-left: 25%;
	margin-top: 10%;
	padding-top: 1%;
	background-color: #0067cc;
}

form > div {
	width: 100%;
	text-align:center;
	height: 50px;
}

#input_phone_number {
	height: 120%;
}

form > div > div {
	display: inline-block;
	width: 100%;
	height: 100%;
}

form > div > input {
	display: block;
}

form > button {
	margin-bottom: 2%;
	height: 100%;
}

#go_next_step {
	margin-right : 2%;
	background-color: black;
	font-color: white;
	font-size: 1.5vw;
	font-weight: bold;
	width: 68%;
}

#check_booked {
	background-color: grey;
	font-size: 1.5vw;
	font-weight: bold;
	width: 30%;
}
</style>

<script>
import bookingApi from '../apis/booking.js'

export default {
  name: 'BookingFirstStep',
  data: function() {
  	return {
  		phoneNumber: ''
  	}
  },
  components: {
  
  },
  methods: {
  	navigateToBookingSecondStepPage() {
  		bookingApi.navigateToBookingSecondStepPage(this.phoneNumber);
  	},
  	navigateToBookedPage() {
  		bookingApi.navigateToBookedPage(this.phoneNumber);
  	}
  },
  mounted() {

  }
}
</script>