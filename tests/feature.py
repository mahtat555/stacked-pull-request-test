""" The Feature tests
"""

import unittest
import requests


class TestApi(unittest.TestCase):
    """ Test the API endpoints """

    def setUp(self):
        """ Setup the tests
        """

        self.host = "http://localhost:8000"

    def test_should_get_404_error(self):
        """ Test the 404 error
        """

        response = requests.post(f"{self.host}/tyy")
        self.assertEqual(response.status_code, 404)

        response = requests.get(f"{self.host}/inverse")
        self.assertEqual(response.status_code, 404)

    def test_should_get_the_inverse(self):
        """ Test the inverse
        """

        response = requests.post(f"{self.host}/inverse", json={
            "integer": 2
        })
        data = response.json()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data["inverse"], 55)
