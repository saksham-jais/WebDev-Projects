# Database Schema - CivicFlow

## Entities

### `users`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PRIMARY KEY | Unique identifier. |
| `username` | VARCHAR(50) | UNIQUE, NOT NULL | Login name. |
| `password` | VARCHAR(255) | NOT NULL | BCrypt hashed password. |
| `email` | VARCHAR(100) | UNIQUE, NOT NULL | User email. |
| `full_name` | VARCHAR(100) | | Display name. |
| `role_id` | UUID | FK -> `roles(id)` | User's role. |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Record creation time. |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | Record update time. |

### `roles`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PRIMARY KEY | Unique identifier. |
| `name` | VARCHAR(20) | UNIQUE, NOT NULL | role name (CITIZEN, STAFF, ADMIN). |

### `services` (E-Services)
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PRIMARY KEY | Unique identifier. |
| `title` | VARCHAR(100) | NOT NULL | Name of the service. |
| `description` | TEXT | | Brief description. |
| `category` | VARCHAR(50) | | e.g., "Sustainability", "Infrastructure". |
| `icon_name` | VARCHAR(50) | | Lucide icon name. |
| `link` | VARCHAR(255) | | Internal or external link. |
| `is_active` | BOOLEAN | DEFAULT TRUE | Status of the service. |

### `updates` (Latest Updates)
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PRIMARY KEY | Unique identifier. |
| `title` | VARCHAR(200) | NOT NULL | Headline. |
| `content` | TEXT | | Full article/update. |
| `image_url` | VARCHAR(255) | | Featured image. |
| `category` | VARCHAR(50) | | e.g., "Sustainability", "Infrastructure". |
| `published_at` | TIMESTAMP | | Public display date. |

### `officials` (Directory)
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PRIMARY KEY | Unique identifier. |
| `name` | VARCHAR(100) | NOT NULL | Full name. |
| `designation` | VARCHAR(100) | | Job title. |
| `department` | VARCHAR(100) | | Department name. |
| `email` | VARCHAR(100) | | Official email. |
| `phone` | VARCHAR(20) | | Office phone. |
| `image_url` | VARCHAR(255) | | Portrait image. |

### `audit_logs`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PRIMARY KEY | Unique identifier. |
| `user_id` | UUID | FK -> `users(id)` | Who performed the action. |
| `action` | VARCHAR(50) | NOT NULL | e.g., "LOGIN", "UPDATE_SERVICE". |
| `target_table` | VARCHAR(50) | | Affected table. |
| `target_id` | UUID | | Affected record ID. |
| `details` | JSONB | | Detailed changes or context. |
| `ip_address` | VARCHAR(45) | | Request IP. |
| `timestamp` | TIMESTAMP | DEFAULT NOW() | When it happened. |

### `contact_messages`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PRIMARY KEY | Unique identifier. |
| `full_name` | VARCHAR(100) | NOT NULL | User's full name. |
| `email` | VARCHAR(100) | NOT NULL | User's email. |
| `subject` | VARCHAR(200) | NOT NULL | Subject of the message. |
| `message` | TEXT | NOT NULL | The actual message content. |
| `status` | VARCHAR(20) | DEFAULT 'PENDING' | Status (PENDING, READ, REPLIED). |
| `created_at` | TIMESTAMP | DEFAULT NOW() | When the message was sent. |

### `zones`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PRIMARY KEY | Unique identifier. |
| `zone_name` | VARCHAR(100) | NOT NULL | Name of the zone. |
| `active` | BOOLEAN | DEFAULT TRUE | Zone status. |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Record creation time. |

### `wards`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PRIMARY KEY | Unique identifier. |
| `ward_name` | VARCHAR(100) | NOT NULL | Name of the ward. |
| `zone_id` | VARCHAR(50) | NOT NULL | Parent zone ID reference. |
| `active` | BOOLEAN | DEFAULT TRUE | Ward status. |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Record creation time. |

### `surveyors`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PRIMARY KEY | Unique identifier. |
| `full_name` | VARCHAR(100) | NOT NULL | Surveyor full name. |
| `email` | VARCHAR(100) | | Surveyor email. |
| `mobile` | VARCHAR(20) | | Surveyor mobile number. |
| `username` | VARCHAR(50) | UNIQUE | Auto-generated username. |
| `default_password` | VARCHAR(255) | | Initial password. |
| `profile_picture_name` | VARCHAR(255) | | Profile picture filename. |
| `assigned_wards` | TEXT | | Comma-separated assigned ward names. |
| `active` | BOOLEAN | DEFAULT TRUE | Surveyor active status. |
| `avatar_url` | VARCHAR(255) | | Cloudinary avatar URL. |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Record creation time. |
