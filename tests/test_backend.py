import pytest
from fastapi.testclient import TestClient
from app import app  # Import your FastAPI app instance
from typing import List

client = TestClient(app)

# Example test cases for the /api/ask endpoint
@pytest.mark.parametrize("questions, expected_status", [
    (["What is ChurnZero?", "How does ChurnZero work?"], 200),
    ([""], 422),
])
def test_ask_question(questions: List[str], expected_status: int):
    for question in questions:
        response = client.post("/api/ask", json={"question": question})
        assert response.status_code == expected_status

# Example test cases for the data retrieval functions
def test_get_youtube_data():
    response = client.get("/api/youtube_data")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_blog_data():
    response = client.get("/api/blog_data")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

# Add more test cases as needed

if __name__ == "__main__":
    pytest.main()
