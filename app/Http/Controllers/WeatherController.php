<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WeatherController extends Controller
{
    public $apiKey;
    public $client;

    public function __construct()
    {
        $this->client = new Client(); // Create a new Guzzle client instance
        $this->apiKey = env('WEATHER_API_KEY'); // Get your API key from environment variables
    }

    public function index(){
        $data = $this->getWeatherData();
        return Inertia::render('Dashboard',compact('data'));
    }

    public function getWeatherData(){

        try {
            $response = $this->client->request('GET', 'https://api.weatherapi.com/v1/forecast.json?key=a7545f22d186425eb1f21320241409&q=Isabela,%20Ilagan%20City&days=7&aqi=no&alerts=no');

            $weatherData = json_decode($response->getBody(), true);

        
            return $weatherData; // Return the weather data as JSON response
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to fetch weather data'], 500);
        }
    }
}
