<template>
    <section class="container has-text-left">
        <div class="columns">
            <div class="column is-8 mantraForm">
                <form action="" v-on:submit.prevent>
                    <div class="columns" :class="{ 'inputError' : $v.name.$error }">
                        <div class="column is-12">
                            <div class="field">
                                <label for="" class="label has-text-left">Name*</label>
                                <div class="control">
                                    <input type="text" v-model ='$v.name.$model' @blur="$v.name.$touch()" class="input">
                                    <div class="error" v-if="!$v.name.required">Your name is required!</div>                                                                        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns" :class="{ 'inputError' : $v.email.$error }">
                        <div class="column is-12">
                            <div class="field">
                                <label for="" class="label has-text-left">Email*</label>
                                <div class="control">
                                    <input type="email" v-model='$v.email.$model' @blur="$v.email.$touch()" class="input">
                                    <div class="error" v-if="!$v.email.required">Your email is required!</div>
                                    <div class="error" v-if="!$v.email.email">Please enter a valid email</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns" :class="{ 'inputError' : $v.phone.$error }">
                        <div class="column is-12">
                            <div class="field">
                                <label for="" class="label has-text-left">Phone*</label>
                                <div class="control">
                                    <input type="number"  v-model='$v.phone.$model' @blur="$v.phone.$touch()" class="input">
                                    <div class="error" v-if="!$v.phone.required">Please provide your phone number!</div>
                                    <!-- <div class="error" v-if="!$v.phone.numeric">Please enter a valid phone!</div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns twoCol">
                        <div class="column is-6">
                            <div class="field">
                                <label for="" class="label has-text-left">Suburb</label>
                                <div class="control">
                                    <input type="text"  v-model='suburb' class="input">
                                </div>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="field">
                                <label for="" class="label has-text-left">Subject</label>
                                <div class="control">
                                    <div class="select" style="width: 100%">
                                        <select name=""  v-model='subject'>
                                            <!-- <option disabled value="">Please Select One</option> -->
                                            <option value="General Enquiry">General Enquiry</option>
                                            <option value="Driving Lessons">Driving Lessons</option>
                                            <option value="Lesson and Test">Lesson and Test</option>
                                        </select>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-12">
                            <div class="field">
                                <label for="" class="label has-text-left">Enquiry</label>
                                <div class="control">                        
                                    <textarea class="textarea"  v-model='enquiry' placeholder="10 lines of textarea" rows="10"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-6">
                            <div class="field">
                                <div class="control">
                                    <button @click.prevent = "submitContact" :disabled="$v.$invalid" class="button is-primary">Submit</button>
                                </div>
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
           

  <!-- <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
    <label class="form__label">Name</label>
    <input class="form__input" v-model.trim="$v.name.$model"/>
  </div>
  <div class="error" v-if="!$v.name.required">Field is required</div>
  <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div> -->

    </section>
</template>
<script>
import axios from 'axios';
import { required, email, numeric } from 'vuelidate/lib/validators';

export default {

    data () {
        return {
            name : '',
            email: '',
            phone: '',
            suburb: '',
            subject: 'Driving Lessons',
            enquiry: ''
        }
    },

    validations : {
        name: {
            required :required
        },
        email: {
            required: required,
            email: email
        },
        phone: {
            required: required,
            phone: numeric
        }
    },

    methods: {
        submitContact () {

            var contactData = {
                name : this.name,
                email : this.email,
                phone : this.phone,
                suburb : this.suburb,
                subject : this.subject,
                enquiry : this.enquiry
            }
            // this.$v.name.$touch();
            // this.$v.email.$touch();

            if(this.$v.$invalid) {
                console.log('form is invalid');
                return;
            }

            console.log('form is valid')
            console.log(contactData);

return;
            // console.log(contactData)

            axios.post('/process-contact', contactData)
            .then((res) => {
                //console.log(res)
            })
            .catch((err) => {
                //console.log(err)
            });
        }
    }
}
</script>