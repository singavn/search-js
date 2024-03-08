@search
Feature: Search apps in apps.microsoft.com
        In order to find an app to use
              As a Normal user
              I want to be able to search app in website


# Use `Background` as Pre-requisite step if more than one scenario repeats the same
        Background: Navigate to HomePage
            Given I am on the Microsoft page


        @searchApps
        Scenario: Search an app by search bar
             When I input an App Name "TikTok" in search bar
              And I click on the Search button
             Then I should see the list of "TikTok" apps in result page

        @searchApps
        Scenario: Search another app by search bar
             When I input an App Name "Instagram" in search bar
              And I click on the Search button
             Then I should see the list of "Instagram" apps in result page
