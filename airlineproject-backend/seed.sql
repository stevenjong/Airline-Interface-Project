INSERT INTO aircraft (tail_number, airline, model, software_ver, connected, last_connection) VALUES
    ('N001AA', 'Airline 1', 'Model 1', 'v1.0', TRUE,  NOW() - INTERVAL '5 minutes'),
    ('N002AA', 'Airline 1', 'Model 2', 'v1.0', TRUE,  NOW() - INTERVAL '12 minutes'),
    ('N003AA', 'Airline 1', 'Model 1', 'v1.1', FALSE, NOW() - INTERVAL '3 hours'),
    ('N004BB', 'Airline 2', 'Model 3', 'v1.0', TRUE,  NOW() - INTERVAL '2 minutes'),
    ('N005BB', 'Airline 2', 'Model 2', 'v1.1', TRUE,  NOW() - INTERVAL '20 minutes');

INSERT INTO content (name, type, tags, format, duration, file_size) VALUES
    ('Content 1',  'movie',  'tag1,tag2', 'Format 3', 120, 3500.0),
    ('Content 2',  'movie',  'tag1,tag3', 'Format 1', 90,  2800.0),
    ('Content 3',  'movie',  'tag2,tag3', 'Format 2', 110, 3200.0),
    ('Content 4',  'series', 'tag1',      'Format 5', 45,  1200.0),
    ('Content 5',  'series', 'tag2',      'Format 4', 30,  900.0);

INSERT INTO users (email, password_hash, role) VALUES
    ('user1@email.com', 'hashed_pw_1', 'admin'),
    ('user2@email.com', 'hashed_pw_2', 'admin'),
    ('user3@email.com', 'hashed_pw_3', 'support'),
    ('user4@email.com', 'hashed_pw_4', 'support');


INSERT INTO distribution (aircraft_id, content_id, scheduled_date, status) VALUES
    (1, 1, NOW() - INTERVAL '10 days', 'completed'),
    (1, 2, NOW() - INTERVAL '10 days', 'completed'),
    (1, 3, NOW() + INTERVAL '2 days',  'pending'),
    (2, 1, NOW() - INTERVAL '7 days',  'completed'),
    (2, 4, NOW() - INTERVAL '7 days',  'completed');