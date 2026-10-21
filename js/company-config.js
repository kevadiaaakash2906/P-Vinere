/* ============================================
   COMPANY CONFIG
   The one file that lists who can sign in. Passwords are NOT stored
   here (or anywhere in the code) — they live only in Firebase
   Authentication.

   Each person needs three things to match EXACTLY:
     1. a line below
     2. the same email created in Firebase Console →
        Authentication → Users → Add user  (this is where you set
        that person's own password)
     3. the same email in the Firestore rules lists

   id     remembered on the device between visits
   label  the button text on the login screen
   email  that person's Firebase Authentication account
   role   what they can do: 'staff' | 'seller' | 'customer'
   ============================================ */
var COMPANY = {
  accounts: [
    { id: 'staff',    label: 'Piyush',    email: 'staff@vinere.local',    role: 'staff'    },
    { id: 'staff1',    label: 'Arpan',    email: 'staff1@vinere.local',    role: 'staff'    },
    { id: 'seller',   label: 'Het',   email: 'seller@vinere.local',   role: 'seller'   }

    // Example — a second staff member with their own password:
    // , { id: 'staff2', label: 'Staff 2', email: 'staff2@vinere.local', role: 'staff' }
  ]
};
