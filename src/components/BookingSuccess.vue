<template>
	<div class=".container-fluid" id="success_body">
		<div class="col-6" id="success_message">
			<div class="card text-center">
			  <div class="card-header">
			    <h3>Bạn đã đặt lịch khám thành công!</h3>
			  </div>
			  <div class="card-body">
			    <h5 class="card-title">Special title treatment</h5>
			    <p class="card-text">Saigon Pain & Spa Center xin chân thành cảm ơn quý khách!</p>
			    <button class="btn btn-warning" style="margin-right: 2%">Quay lại trang đặt lịch</button>
			    <button class="btn btn-primary" v-on:click="goToBookedPage">Xem lịch bạn đã đặt</button>
			  </div>
			  <div class="card-footer text-muted">
			     Mọi thắc mắc xin liên hệ: 093 793 5502 - 619 Tân Sơn P.12 Q.Gò Vấp Tp.Hcm
			  </div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#success_body {
	background-image: url('~@/assets/background_first_step.jpg');
	height: 100vh;
	overflow: auto;
}

#success_message {
	margin-left: 25%;
	margin-top: 5%;
}
</style>

<script>
import bookingApi from '../apis/booking.js'

export default {
  name: 'BookingSuccess',
  data: function() {
  	return {
  		
  	}
  },
  components: {
  
  },
  methods: {
  	goToBookedPage() {
  		bookingApi.goToBookedPage(this.$route.params.phoneNumber);
  	}
  },
  mounted() {

  }
}
</script>