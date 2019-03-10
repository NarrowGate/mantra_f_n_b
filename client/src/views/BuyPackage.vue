<template>
    <section class="container has-text-left">
        <div class="columns">
            <div class="column">
                Buy Package {{this.package}}
            </div>
        </div>
        <div class="columns">
            <div class="column is-8 mantraForm">
                <form>
                    <div class="columns" :class="{ 'inputError' : $v.firstName.$error }">
                        <div class="column is-12">                        
                            <div class="field">
                                <label for="" class="label has-text-left">First Name*</label>
                                <div class="control">
                                    <input type="text" v-model='$v.firstName.$model' @blur="$v.firstName.$touch()" class="input">
                                    <div class="error" v-if="!$v.firstName.required">Your first name is required!</div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                    <div class="columns" :class="{ 'inputError' : $v.lastName.$error }">
                        <div class="column is-12">
                            <div class="field">
                                <label for="" class="label has-text-left">Last Name</label>
                                <div class="control">
                                    <input type="text" class="input" v-model='$v.lastName.$model' @blur='$v.lastName.$touch()'>
                                    <div class="error" v-if="!$v.lastName.required">Your last name is required!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns" :class="{ 'inputError' : $v.contactNumber.$error }">
                        <div class="column is-12">                        
                            <div class="field">
                                <label for="" class="label has-text-left">Mobile Number</label>
                                <div class="control">
                                    <input type="text" class="input" v-model='$v.contactNumber.$model' @blur='$v.contactNumber.$touch()'>
                                    <div class="error" v-if="!$v.contactNumber.required">Your mobile number is required!</div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                    <div class="columns" :class="{ 'inputError' : $v.email.$error }">
                        <div class="column is-12">
                            <div class="field">
                                <label for="" class="label has-text-left">Email</label>
                                <div class="control">
                                    <input type="text" class="input" v-model='$v.email.$model' @blur='$v.email.$touch()'>
                                    <div class="error" v-if="!$v.email.required">Your email is required!</div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns twoCol">
                        <div class="column is-6">
                            <div class="field">
                                <label for="" class="label has-text-left">Pick up address</label>
                                <div class="control">
                                    <input type="text" class="input">
                                </div>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="field">
                                <label for="" class="label has-text-left">Transmission</label>
                                <div class="control">
                                    <div class="select" style="width: 100%">
                                        <select name="" id="">
                                            <option value="">Automatic</option>
                                            <option value="">Manual</option>
                                        </select>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label for="" class="label has-text-left">You have selected</label>
                                <div class="control">
                                    <div class="select" style="width: 100%">
                                        <select name="" id="">
                                            <option value="">a</option>
                                            <option value="">b</option>
                                        </select>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            Total for {{this.package}} package is 
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <label class="checkbox">
                                <input type="checkbox">
                                I have read and agree to Mantra Driving School's <a href="#">Terms and Conditions</a>
                            </label>                            
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-6">
                            <div class="control">
                                <!-- <paypal
                                    amount="1.00"
                                    currency="AUD"
                                    :client="credentials"
                                    :env="sandbox"
                                    :button-style="myStyle"
                                    @payment-authorized="payment_authorized_cb"
                                    @payment-completed="payment_completed_cb"
                                    @payment-cancelled="payment_cancelled_cb"
                                    >
                                </paypal> -->
                                <!-- <button class="button is-primary" @click.prevent = "payWithPaypal">Pay with Paypal</button> -->
                            </div>                      
                        </div>
                        <div class="column is-6">
                            <button class="button is-primary" @click.prevent = "payWithPaypal">Pay with Paypal</button>
                        </div>
                    </div>                                                     
                </form>
            </div>

            <div class="column is-4 sidebar">
                <h2>FAQ</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios';
import paypal from 'vue-paypal-checkout';
import { required, email, numeric } from 'vuelidate/lib/validators';

export default {
    data () {
        return {
            packageFromRoute: this.$route.params.id,
            credentials: {
                sandbox:'AVP6sBXr3Zhf0hT3Vczssi19Mqe6hmN3pbtDfYID_OTR9INGD7_AQ4ytmKgk-g3l2P8v71FsFcC8h9_O',
                production:'ATKAkG91Z5OUK4nduGVB8wIBkYuZx7o0yjn2MD_6O55UlLGpyGKIcpPQm-FQYAxiXIhmsU-azxyAGnC1'
            },
            firstName:'Selvam',
            lastName:'Sundar',
            contactNumber:6878,
            email:'reshmaclarance@gmail.com',
            pickupAddress:'12 Kornuta Close, Bellowrie',
            transmission:'Automatic',
            package:'Package B',
            packagePrice:55,
            myStyle: {                
                label: '',
                size:  'responsive',
                shape: 'rect',
                color: 'black'                
            }
        }
    },
    components: {
        paypal
    },
    validations: {
        firstName: {
            required: required
        },
        lastName: {
            required: required
        },
        email: {
            required: required,
            email: email
        },
        contactNumber: {
            required: required,
            phone: numeric
        }
    },
    methods: {
        payWithPaypal : () => {

            const userDetails = {
                first_name: this.firstName,
                second_name: this.lastName,
                contact_number: this.contactNumber,
                email: this.email,
                pickup_address:this.pickupAddress,
                transmission: this.transmission,
                purchasedPackage: this.package,
                purchasedPackagePrice:packagePrice
            }

            console.log('hit paypal button');

            axios.post('/buywithpaypal',userDetails)
            .then((dfs)=> {
                console.log('axios post sent')
                console.log(dfs.data);                
            })
            .catch((err) => {
                console.log(err)
            })

            // axios.get('/buywithpaypal')
            // .then((dfs)=> {
            //     console.log('axios post sent')                    
            // })
            // .catch((err) => {
            //     console.log(err)
            // })

        },

        payment_authorized_cb : () => {

        },

        payment_completed_cb : (data) => {

        console.log(data);

        // Paypal account details (not necessarily the user)
        // let payerAccountDetails = {
        //     first_name : data.payer.payer_info.first_name,
        //     last_name : data.payer.payer_info.last_name,
        //     payer_id: data.payer.payer_info.payer_id,
        //     payment_method: data.payer.payment_method,
        //     status: data.state,
        //     total: data.transactions[0].amount.total,
        //     currency:data.payer.payer_info.country_code
        // }

        // Sample data
        let payerAccountDetails = {
            first_name : 'Reshma',
            last_name : 'Melvin',
            payer_id: 'some id',
            payment_method: 'Paypal Method',
            status: 'Approved',
            total: 10,
            currency:'AUD'
        }


        },

        payment_cancelled_cb : () => {

        },
    }
}
</script>