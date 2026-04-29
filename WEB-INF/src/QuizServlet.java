import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.util.*;

public class QuizServlet extends HttpServlet {

    static class Question {
        String q;
        String[] options;
        int ans;

        Question(String q, String[] options, int ans) {
            this.q = q;
            this.options = options;
            this.ans = ans;
        }
    }

    static Map<String, List<Question>> allQuestions = new HashMap<>();

    static {
        // ===== OS QUESTIONS =====
        List<Question> os = new ArrayList<>();
        os.add(new Question("What is scheduling?",
                new String[]{"CPU allocation", "Memory management", "Disk management", "None of the above"}, 0));
        os.add(new Question("Which OS processes jobs in groups without user interaction?",
                new String[]{"Time-sharing OS", "Batch OS", "Real-time OS", "Distributed OS"}, 1));
        os.add(new Question("Which memory management technique suffers from external fragmentation?",
                new String[]{"Paging", "Segmentation", "Virtual Memory", "Cache Memory"}, 1));
        os.add(new Question("What is a deadlock in an operating system?",
                new String[]{"A process running infinitely", "A situation where processes wait indefinitely for resources", "A memory leak", "CPU overheating"}, 1));
        os.add(new Question("Which is a non-preemptive scheduling algorithm?",
                new String[]{"Round Robin", "SRTF", "First Come First Serve", "Multilevel Queue"}, 2));

        // ===== DSA QUESTIONS =====
        List<Question> dsa = new ArrayList<>();
        dsa.add(new Question("Which data structure is used for recursion?",
                new String[]{"Queue", "Stack", "Heap", "Graph"}, 1));
        dsa.add(new Question("Time complexity of binary search?",
                new String[]{"O(n)", "O(log n)", "O(n log n)", "O(1)"}, 1));
        dsa.add(new Question("Which sorting algorithm is stable?",
                new String[]{"Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"}, 2));
        dsa.add(new Question("Which traversal uses a queue?",
                new String[]{"DFS", "BFS", "Inorder", "Postorder"}, 1));
        dsa.add(new Question("Which finds shortest path in weighted graph?",
                new String[]{"DFS", "BFS", "Dijkstra", "Prim"}, 2));

        // ===== PYTHON QUESTIONS =====
        List<Question> python = new ArrayList<>();
        python.add(new Question("File extension for Python files?",
                new String[]{".pyth", ".pt", ".pyt", ".py"}, 3));
        python.add(new Question("Which is a mutable data type in Python?",
                new String[]{"String", "Tuple", "List", "Integer"}, 2));
        python.add(new Question("How to create float variable 2.8?",
                new String[]{"x = 2.8", "x = float(2.8)", "Both", "None"}, 2));
        python.add(new Question("Method to remove whitespace from string?",
                new String[]{"strip()", "trim()", "len()", "clean()"}, 0));
        python.add(new Question("Keyword to define function in Python?",
                new String[]{"define", "func", "lambda", "def"}, 3));

        // ===== JAVA QUESTIONS =====
        List<Question> java = new ArrayList<>();
        java.add(new Question("Keyword to create class in Java?",
                new String[]{"class", "Class", "struct", "interface"}, 0));
        java.add(new Question("Default value of boolean in Java?",
                new String[]{"true", "false", "null", "0"}, 1));
        java.add(new Question("Entry point method in Java?",
                new String[]{"start()", "begin()", "main()", "run()"}, 2));
        java.add(new Question("Which collection allows duplicates?",
                new String[]{"Set", "List", "Map", "None"}, 1));
        java.add(new Question("Keyword for inheritance in Java?",
                new String[]{"extend", "extends", "inherit", "implements"}, 1));

        // ===== PHYSICS QUESTIONS =====
        List<Question> physics = new ArrayList<>();
        physics.add(new Question("SI unit of force?",
                new String[]{"Joule", "Newton", "Watt", "Pascal"}, 1));
        physics.add(new Question("Speed of light in vacuum?",
                new String[]{"3 x 10^8 m/s", "3 x 10^6 m/s", "340 m/s", "1500 m/s"}, 0));
        physics.add(new Question("Ohm's Law relates?",
                new String[]{"P,E,T", "V,I,R", "M,F,A", "D,S,T"}, 1));
        physics.add(new Question("Particle with positive charge?",
                new String[]{"Electron", "Proton", "Neutron", "Photon"}, 1));
        physics.add(new Question("Unit of resistance?",
                new String[]{"Ohm", "Volt", "Ampere", "Watt"}, 0));

        allQuestions.put("OS", os);
        allQuestions.put("DSA", dsa);
        allQuestions.put("PYTHON", python);
        allQuestions.put("JAVA", java);
        allQuestions.put("PHYSICS", physics);
    }

    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws IOException {

        HttpSession session = req.getSession();

        String subject = req.getParameter("subject");

        String currentSubject = (String) session.getAttribute("subject");
        if (subject != null && !subject.equals(currentSubject)) {
            session.invalidate();
            session = req.getSession();
            session.setAttribute("subject", subject);
            session.setAttribute("current", 0);
            session.setAttribute("score", 0);
        }

        Integer current = (Integer) session.getAttribute("current");
        Integer score   = (Integer) session.getAttribute("score");
        String subj     = (String)  session.getAttribute("subject");

        if (current == null || subj == null) {
            res.sendRedirect("index.html");
            return;
        }

        List<Question> questions = allQuestions.get(subj);

        res.setContentType("text/html");
        PrintWriter out = res.getWriter();

        out.println("<html><head></head><body>");

        if (current < questions.size()) {
            Question q = questions.get(current);

            out.println("<h2>Question " + (current + 1) + "/" + questions.size() + "</h2>");
            out.println("<h2>" + q.q + "</h2>");

            // Hidden span carries the correct answer index — read by the frontend
            out.println("<span id='correctAns' style='display:none'>" + q.ans + "</span>");

            out.println("<form method='post' action='QuizServlet'>");
            for (int i = 0; i < q.options.length; i++) {
                out.println("<input type='radio' name='ans' value='" + i + "' id='opt" + i + "' required>");
                out.println("<label for='opt" + i + "'>" + q.options[i] + "</label><br>");
            }
            out.println("<input type='submit' value='Next'>");
            out.println("</form>");

        } else {
            out.println("<h2>the wired returned: </h2>");
            out.println("<h2>score: " + score + " / " + questions.size() + "</h2>");
            session.invalidate();
        }
        out.println("</body></html>");
    }
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws IOException {

        HttpSession session = req.getSession();

        int current    = (int)    session.getAttribute("current");
        int score      = (int)    session.getAttribute("score");
        String subject = (String) session.getAttribute("subject");

        List<Question> questions = allQuestions.get(subject);

        String ansParam = req.getParameter("ans");
        if (ansParam != null) {
            int selected = Integer.parseInt(ansParam);
            if (selected == questions.get(current).ans) {
                score++;
            }
        }

        current++;
        session.setAttribute("current", current);
        session.setAttribute("score", score);

        doGet(req, res);
    }
}
