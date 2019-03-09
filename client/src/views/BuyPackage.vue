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
                        <div class="column">
                            <div class="control">
                                <!-- <paypal
                                    amount="10.00"
                                    currency="USD"
                                    :client="credentials">
                                </paypal> -->
                                <button class="button is-primary" @click.prevent = "payWithPaypal">Pay with Paypal</button>
                            </div>                      
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
            package: this.$route.params.id,
            credentials: {
                sandbox:'AQjF9Nvyc-W5MNcGIuXDkXAYBu_-2Rxyhxxx-jreQlFaVHwLgDbQxz8wgFnUhcgtdYTnhEOlYE9a6xfa',
                production:'Aadxfwml9vmGU8QXOQERb_mkuQ8OnYNKaPG9O30Px8VuSIyOTUEHQqDV1nqshCaI879I84coOlIGGee7'
            },
            firstName:'',
            lastName:'',
            contactNumber:'',
            email:'',
            pickupAddress:'',
            transmission:'',
            package:''
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

        const transactionDetails = {
                'product' :'product1'
            }
            console.log('hit paypal button');


            axios.post('/buywithpaypal',transactionDetails)
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

        }
    }
}
</script>