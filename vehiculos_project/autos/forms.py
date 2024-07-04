from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(max_length=150)
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput)
    admin_key = forms.CharField(max_length=100, required=False)
