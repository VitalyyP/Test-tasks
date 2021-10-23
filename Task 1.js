Евгения Байда, [22.10.21 11:46]
Добрій день.вот такое тестовое задание прислали,не знаю, с какой стороны подступиться...                                                                                                                                                                              const recordType = "Vacancy";

const softwareEngineerVacancy = new Record("SoftwareEngineer0001", recordType);
const frontEndEngineerVacancy = new Record("FrontEndEngineer0020", recordType);

/
 * Implement a logic of actions and invoke those actions below:
 */

// Invoke "Submit for Approval" for softwareEngineerVacancy
// Invoke "Approve" for softwareEngineerVacancy

// Invoke "Submit for Approval" for frontEndEngineerVacancy
// Invoke "Reject" for frontEndEngineerVacancy

/
 * Implement the service below the comment block

class <Service> {

}

*/

class Record {
    id;
    type;

    Record(id, type) {
        this.id = id;
        this.type = type;
    }

    getId() {
        return this.id;
    }

    getType() {
        return this.type;
    }
}                                                                                                                                                                                                                                                                                                                                                                                           Functional requirements
• Implement a service (JavaScript class) that is able to execute actions (Submit for Approval, 
Approve, Reject) applied to a record
• Keep in mind that, potentially, in future the service should be able to execute other type of 
actions that are not related to approval process or vacancy module. Moreover, it can happen 
that based on a Record type a behaviour of an action may differ.
• An action should log a message to the console (replace record_id placeholder with an actual 
record Id)
• Service should have a method which can execute either one action or multiple.
Assumtions:
• Action can be either function or object. Up to implementation.
Additional:
Let’s assume that action is executed asynchronously, provide an example of this kind of implementation 
a well 
Submit for Approval: Submitted for approval Vacancy: {record_id}
Approve: Approved Record: {record_id}
Reject: Reject Record: {record_id}

Евгения Байда, [22.10.21 11:46]
Submitted for approval Vacancy: SoftwareEngineer0001
Approved Record: SoftwareEngineer0001
Submitted for approval Vacancy: FrontEndEngineer0020
Rejected Record: FrontEndEngineer0020
