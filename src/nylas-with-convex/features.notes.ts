/**
--------------------------------------
-----------  APP FEATURES  -----------
--------------------------------------

FEATURES LIST
- User can authenticate with available provider (currently only Google).
- User links email address with their account.
- App kicks off scannning process for the email address.
- User can view progress of email scan.
- App notifies user of scannning process completion.
- User can have an overview of their footprint
  - Kind of data user shares with the entities.
  - Grouping of common email interaction types in user's footprint and
    corresponding entities that make up each one.
  - Summary of the theme of emails received by user in recent times.
  - Time range filter of footprints to process.
- User can view all entities in their footprint.
  - Entity identity (logo and domain).
  - Types of interactions user has with the entity.
  - Kind of data user shares with the entity.
  - Entities which user has similar footprint with.
  - Most recent email messages.
  - Summary of user interaction with an entity (generated with AI).
  - Time range filter of user's footprint with an entity to process.
- User can compare their digital footprints with multiple entities.
- User can initiate data reclaim from any entity they want to.
  - App can suggest reclaim action to user based on what we know about the
    entity in relation to the user. Entity may not be holding user info; User
    may have subscribed to a newletter.
  - App gives user reclaim message templates (not editable).
  - User can use AI to generate reclaim message, which must be reviewed by user
    before sending to entity. (Generated message can be saved in draft or copied.)
  - App can read responses to reclaim messages from entities and autosuggest
    counter-responses for user based on a number of expected responses.
  - User can manually add email to be sent reclaim request.
- User can manually remove entity from footprint (mark data as reclaimed).
- App can automatically detect when a user's data is completely reclaimed, based
  on the messages sent/received by the entity/user.
- User can do basic account management
  - User can add/remove email accounts which removes associated data.
  - User can transfer email accounts based on spec in AUTH_PRINCIPLE.
  - User can update basic name info.
- User can delete their account.
- User can export their relevant data as a JSON file.

*/
export const APP_FEATURES = Symbol("APP_FEATURES")
