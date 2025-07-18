# Reconciler ToDo App

This is a simple ToDo List App built using vanilla JavaScript that mimics the core ideas behind how React's Reconciler works — without using any external libraries or frameworks.

## Purpose

The main purpose of this project is to understand and simulate the concept of reconciliation, where the DOM is updated in an efficient and minimal way by comparing changes in state.

Instead of directly modifying the DOM with each interaction, this app maintains an internal state object and reconciles it with the UI, updating only the necessary parts of the DOM.

This project demonstrates:
- How to track and manage application state
- How to update the UI in response to state changes
- How to handle dynamic event listeners
- A basic manual approach to DOM reconciliation

## Features

- Add new todo items
- Remove items from the list
- Real-time UI updates based on internal state
- Minimal and efficient DOM updates

