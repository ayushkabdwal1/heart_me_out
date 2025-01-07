from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Mock data for counselors (You will replace this with actual database queries)
counselors = [
    {'id': 1, 'name': 'John Doe', 'specialization': 'Mental Health', 'rating': 4.5, 'availability': '9:00 AM - 5:00 PM', 'profile_picture': 'profile1.jpg'},
    {'id': 2, 'name': 'Jane Smith', 'specialization': 'Career Counseling', 'rating': 4.8, 'availability': '10:00 AM - 6:00 PM', 'profile_picture': 'profile2.jpg'},
    {'id': 3, 'name': 'Mike Johnson', 'specialization': 'Relationship Counseling', 'rating': 4.3, 'availability': '12:00 PM - 8:00 PM', 'profile_picture': 'profile3.jpg'}
]

@app.route('/')
def index():
    return render_template('counselor_list.html', counselors=counselors)

@app.route('/login')
def login():
    # Show the login page (implement the login functionality here)
    return "Login Page"

@app.route('/register')
def register():
    # Show the register page (implement the registration functionality here)
    return "Register Page"

@app.route('/book/<int:counselor_id>')
def book(counselor_id):
    # Book a session with the selected counselor
    return f"Booking a session with counselor {counselor_id}"

if __name__ == '__main__':
    app.run(debug=True)
