-- Seed minimal data for The Noor School

INSERT INTO facilities (title, description, icon_name, image_url, display_order)
VALUES
  ('Library','Well-stocked library with 10,000+ books and digital resources.','BookOpen','/library.jpg',1),
  ('Science Lab','Modern physics, chemistry, and biology labs.','Microscope','/sciencelab.jpg',2),
  ('IT Lab','High-speed internet and modern software.','Monitor','/itlab.jpg',3),
  ('Sports Ground','Facilities for basketball, football, and athletics.','Trophy','/sports.jpg',4),
  ('Cafeteria','Hygienic cafeteria serving nutritious meals.','Coffee','/cafe.jpg',5)
ON CONFLICT DO NOTHING;
