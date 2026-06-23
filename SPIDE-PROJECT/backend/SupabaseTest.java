import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class SupabaseTest {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://db.umcpdyvtfnwfyryueobi.supabase.co:5432/postgres?sslmode=require";
        String user = "postgres";
        String password = "TYWdDnqdewIALafo";

        System.out.println("Connecting to Supabase...");
        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            System.out.println("Connection successful!");
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT version()");
            if (rs.next()) {
                System.out.println("PostgreSQL Version: " + rs.getString(1));
            }
        } catch (Exception e) {
            System.err.println("Connection failed!");
            e.printStackTrace();
        }
    }
}
